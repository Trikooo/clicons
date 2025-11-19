import React from 'react';
import config from '../config';

interface AiBrain2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AiBrain2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/ai-brain2)
 * @see {@link https://clicons.dev/icon/ai-brain2}
 */
const AiBrain2Icon = React.forwardRef<SVGSVGElement, AiBrain2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 4.49988C12 3.11917 10.8807 1.99988 9.5 1.99988C8.11929 1.99988 7 3.11917 7 4.49988C5.34315 4.49988 4 5.84303 4 7.49988C4 8.06854 4.15822 8.60025 4.43304 9.05338C3.04727 9.31843 2 10.5369 2 11.9999C2 13.4629 3.04727 14.6813 4.43304 14.9464C4.15822 15.3995 4 15.9312 4 16.4999C4 18.1568 5.34315 19.4999 7 19.4999C7 20.8806 8.11929 21.9999 9.5 21.9999C10.8807 21.9999 12 20.8806 12 19.4999'
    }
  ],
  [
    'path',
    {
      d: 'M12 19.4999C12 20.8806 13.1193 21.9999 14.5 21.9999C15.8807 21.9999 17 20.8806 17 19.4999C18.6569 19.4999 20 18.1568 20 16.4999C20 15.9312 19.8418 15.3995 19.567 14.9464C20.9527 14.6813 22 13.4629 22 11.9999C22 10.5369 20.9527 9.31843 19.567 9.05338C19.8418 8.60025 20 8.06854 20 7.49988C20 5.84303 18.6569 4.49988 17 4.49988C17 3.11917 15.8807 1.99988 14.5 1.99988C13.1193 1.99988 12 3.11917 12 4.49988'
    }
  ],
  [
    'path',
    {
      d: 'M10.487 7.00085V8.97987M7 10.5012H9.05198M15.0231 10.5012H17.075M15.0231 13.4745H17.075M7 13.4745H9.05198M10.487 15.0201V16.9991M13.5125 15.0201V16.9991M13.5017 7.00085V8.97987M10.052 14.9684H14.0231C14.5753 14.9684 15.0231 14.5207 15.0231 13.9684V9.97987C15.0231 9.42759 14.5753 8.97987 14.0231 8.97987H10.052C9.49969 8.97987 9.05198 9.42759 9.05198 9.97987V13.9684C9.05198 14.5207 9.49969 14.9684 10.052 14.9684Z'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

AiBrain2Icon.displayName = 'AiBrain2Icon';
export default AiBrain2Icon;

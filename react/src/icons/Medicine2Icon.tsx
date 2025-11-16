import React from 'react';
import config from '../config';

interface Medicine2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Medicine2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/medicine2)
 * @see {@link https://clicons.dev/icon/medicine2}
 */
const Medicine2Icon = React.forwardRef<SVGSVGElement, Medicine2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M20.1932 12.999C21.8501 15.8688 20.8669 19.5383 17.9971 21.1952C15.1273 22.8521 11.4578 21.8688 9.80094 18.999M20.1932 12.999C18.5364 10.1293 14.8669 9.14604 11.9971 10.8029C9.12734 12.4598 8.14409 16.1293 9.80094 18.999M20.1932 12.999L9.80094 18.999'
    }
  ],
  [
    'path',
    {
      d: 'M10.0428 5.54203L15.1278 2.5374C17 1.43112 19.394 2.08763 20.4749 4.00376C21.3433 5.54315 21.1 7.4272 20 8.6822M10.0428 5.54203L4.95785 8.54667C3.08563 9.65294 2.44415 12.1031 3.52508 14.0192C4.17499 15.1713 5.29956 15.868 6.5 16M10.0428 5.54203L11.5 8'
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

Medicine2Icon.displayName = 'Medicine2Icon';
export default Medicine2Icon;

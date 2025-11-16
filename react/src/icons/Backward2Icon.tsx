import React from 'react';
import config from '../config';

interface Backward2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Backward2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/backward2)
 * @see {@link https://clicons.dev/icon/backward2}
 */
const Backward2Icon = React.forwardRef<SVGSVGElement, Backward2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2.16293 12.9178C2.4453 13.6884 3.29859 14.3047 5.00518 15.5372C7.33231 17.218 8.49587 18.0583 9.4688 17.9969C10.2118 17.9499 10.9024 17.6007 11.3777 17.0315C12 16.2863 12 14.8575 12 12C12 9.14246 12 7.71369 11.3777 6.96846C10.9024 6.39933 10.2118 6.0501 9.4688 6.00315C8.49587 5.94167 7.33231 6.78203 5.00518 8.46275C3.29859 9.6953 2.4453 10.3116 2.16293 11.0822C1.94569 11.675 1.94569 12.325 2.16293 12.9178Z'
    }
  ],
  [
    'path',
    {
      d: 'M12.1629 12.9178C12.4453 13.6884 13.2986 14.3047 15.0052 15.5372C17.3323 17.218 18.4959 18.0583 19.4688 17.9969C20.2118 17.9499 20.9024 17.6007 21.3777 17.0315C22 16.2863 22 14.8575 22 12C22 9.14246 22 7.71369 21.3777 6.96846C20.9024 6.39933 20.2118 6.0501 19.4688 6.00315C18.4959 5.94167 17.3323 6.78203 15.0052 8.46275C13.2986 9.6953 12.4453 10.3116 12.1629 11.0822C11.9457 11.675 11.9457 12.325 12.1629 12.9178Z'
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

Backward2Icon.displayName = 'Backward2Icon';
export default Backward2Icon;

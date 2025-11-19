import React from 'react';
import config from '../config';

interface BaseballIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BaseballIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/baseball)
 * @see {@link https://clicons.dev/icon/baseball}
 */
const BaseballIcon = React.forwardRef<SVGSVGElement, BaseballIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 22C12 21.8136 11.9949 21.6285 11.9848 21.4446M2 12C2.2062 12 2.41094 12.0062 2.61405 12.0185M5.34028 12.5715C5.67469 12.69 6.00092 12.8257 6.3179 12.9777M8.68574 14.5634C8.94563 14.7972 9.1932 15.0445 9.42736 15.304M11.0417 17.7227C11.181 18.0168 11.3065 18.3188 11.4172 18.6278'
    }
  ],
  [
    'path',
    {
      d: 'M12 2C12 2.18635 12.0051 2.37152 12.0152 2.55535M22 12C21.7938 12 21.5891 11.9938 21.3859 11.9815M18.6597 11.4285C18.3253 11.31 17.9991 11.1743 17.6821 11.0223M15.3143 9.43657C15.0544 9.20277 14.8068 8.95554 14.5726 8.69597M12.9583 6.27732C12.819 5.98322 12.6935 5.68123 12.5828 5.3722'
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

BaseballIcon.displayName = 'BaseballIcon';
export default BaseballIcon;

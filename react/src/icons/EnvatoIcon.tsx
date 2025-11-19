import React from 'react';
import config from '../config';

interface EnvatoIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name EnvatoIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/envato)
 * @see {@link https://clicons.dev/icon/envato}
 */
const EnvatoIcon = React.forwardRef<SVGSVGElement, EnvatoIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M5.6208 9.71868C5.57738 11.0491 5.74133 12.522 6.29962 13.7648C6.58057 14.3902 6.72104 14.7029 6.97131 14.6597C7.22157 14.6165 7.24731 14.225 7.2988 13.4418C7.63656 8.30431 12.0617 2.82088 17.2345 2.06656C17.7565 1.99044 18.0175 1.95237 18.3247 2.10501C18.6318 2.25765 18.7647 2.50609 19.0305 3.00296C23.4777 11.3161 20.1384 22 11.581 22C4.84807 22 0.829706 14.1923 4.23649 9.08353C4.77945 8.26932 5.05093 7.86222 5.36303 7.95815C5.67513 8.05409 5.65702 8.60895 5.6208 9.71868Z'
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

EnvatoIcon.displayName = 'EnvatoIcon';
export default EnvatoIcon;

import React from 'react';
import config from '../config';

interface PointingRightIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PointingRightIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/pointing-right)
 * @see {@link https://clicons.dev/icon/pointing-right}
 */
const PointingRightIcon = React.forwardRef<SVGSVGElement, PointingRightIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M22.0022 4.5H16.0059M22.0022 4.5C22.0022 3.79977 20.0091 2.49153 19.5037 2M22.0022 4.5C22.0022 5.20023 20.0091 6.50847 19.5037 7'
    }
  ],
  [
    'path',
    {
      d: 'M1.99767 10.8264L2.94576 10.8264C3.59087 10.8264 4.21881 10.6175 4.73653 10.2308L9.63637 6.57074C10.2015 6.14861 10.9026 5.81146 11.5499 6.09015C12.5976 6.5413 13.2783 7.81411 11.7074 9.37203L9.99906 10.9703L20.4157 10.9703C22.4576 11.0266 22.5589 14.3169 20.4157 14.4576L14.4794 14.4576C14.6704 15.9386 13.6276 22.9153 9.21009 21.8984C9.00021 21.8501 8.78723 21.8019 8.57708 21.7548C7.65888 21.549 6.02245 20.9407 5.06576 20.27C4.06983 19.5717 3.07783 19.8181 1.99767 19.8181'
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

PointingRightIcon.displayName = 'PointingRightIcon';
export default PointingRightIcon;

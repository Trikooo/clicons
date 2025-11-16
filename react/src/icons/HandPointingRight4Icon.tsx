import React from 'react';
import config from '../config';

interface HandPointingRight4IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name HandPointingRight4Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/hand-pointing-right4)
 * @see {@link https://clicons.dev/icon/hand-pointing-right4}
 */
const HandPointingRight4Icon = React.forwardRef<SVGSVGElement, HandPointingRight4IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M13.485 10.7553L16.4892 10.7553M16.4892 10.7553H19.9954C20.8264 10.7553 21.5 10.083 21.5 9.25355C21.5 8.42415 20.8264 7.75178 19.9954 7.75178L14.531 7.75178M16.4892 10.7553L16.4624 11.8097C16.4443 12.5207 16.056 13.1373 15.4844 13.4776M14.531 7.75178L9.96807 7.75178M14.531 7.75178L11.7712 5.15834C9.90362 3.58588 8.54219 4.4122 7.78577 4.99245L5.34841 6.60732C3.28085 7.83214 2.5 9.2495 2.5 10.4418V15.3225C2.5 17.5886 4.88227 19.7016 7.06579 19.7016L12.2657 19.7497C13.2759 19.759 14.135 19.0163 14.27 18.017L14.4593 16.4766M13.4552 13.7589H14.4593C14.8335 13.7589 15.1842 13.6563 15.4844 13.4776M15.4844 13.4776L15.4297 14.8132C15.4021 15.8977 14.5134 16.7624 13.4266 16.7624H12.4226'
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

HandPointingRight4Icon.displayName = 'HandPointingRight4Icon';
export default HandPointingRight4Icon;
